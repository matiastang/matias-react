declare namespace PolygonScssNamespace {
  export interface IPolygonScss {
    chart: string;
    point: string;
  }
}

declare const PolygonScssModule: PolygonScssNamespace.IPolygonScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PolygonScssNamespace.IPolygonScss;
};

export = PolygonScssModule;
