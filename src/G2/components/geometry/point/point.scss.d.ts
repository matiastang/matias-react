declare namespace PointScssNamespace {
  export interface IPointScss {
    chart: string;
    point: string;
  }
}

declare const PointScssModule: PointScssNamespace.IPointScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PointScssNamespace.IPointScss;
};

export = PointScssModule;
