export const getInputClasses = (hasError: boolean, styles: Record<string, string>) => {
  const classes = [styles.input];

  if (hasError) {
    classes.push(styles.error);
  }

  return classes.join(' ');
};
