// react-17-legacy-support.d.ts
declare namespace React {
  // Patch the react types to put back StatelessComponent which was removed in React 18
  export type StatelessComponent<Props> = React.FunctionComponent<
    Props & { children?: React.ReactNode }
  >;
}
