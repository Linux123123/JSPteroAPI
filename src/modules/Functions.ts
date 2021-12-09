export interface MakeIncl {
  [key: string]: boolean;
}

export interface MakeFilter {
  filter: string;
  filterBy: string;
}

export interface MakeOpts {
  includes?: MakeIncl;
  filter?: MakeFilter;
  page?: number;
}

export const makeOptions = (options: MakeOpts): string => {
  const query = new URLSearchParams();
  if (options.page) {
    query.append('page', options.page.toString());
    // Also append per page just in case it's not set
    // I make 75 the default becase it's a reasonable default
    query.append('per_page', '75');
  }
  if (options.includes) {
    let includes = '';
    const optionsArray = Object.entries(options.includes);
    if (optionsArray.some(([, value]) => value === true)) {
      optionsArray.forEach(([key, value]) => {
        if (value) includes += `${key},`;
      });
    }
    if (includes) {
      query.append('include', includes.slice(0, -1));
    }
  }
  if (options.filter) {
    query.append(`filter[${options.filter.filterBy}]`, options.filter.filter);
  }
  const queryString = query.toString();
  return queryString ? `?${queryString}` : '';
};

export const paginate = async <T>(
  request: (options: MakeOpts) => Promise<{
    data: T[];
    meta: {
      pagination: {
        total_pages: number;
      };
    };
  }>,
  options: MakeOpts
): Promise<T[]> => {
  const page1 = await request({ ...options, page: 1 });
  let data = page1.data;
  if (page1.meta.pagination.total_pages > 1) {
    for (let i = 2; i <= page1.meta.pagination.total_pages; i++) {
      const page = await request({
        ...options,
        page: i
      });
      data = data.concat(page.data);
    }
  }
  return data;
};
