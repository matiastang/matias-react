declare namespace LineScssNamespace {
  export interface ILineScss {
    chart: string;
    point: string;
  }
}

declare const LineScssModule: LineScssNamespace.ILineScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LineScssNamespace.ILineScss;
};

export = LineScssModule;
