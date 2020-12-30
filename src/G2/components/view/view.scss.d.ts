declare namespace ViewScssNamespace {
  export interface IViewScss {
    chart: string;
    point: string;
  }
}

declare const ViewScssModule: ViewScssNamespace.IViewScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ViewScssNamespace.IViewScss;
};

export = ViewScssModule;
