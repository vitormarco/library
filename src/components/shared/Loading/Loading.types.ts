export type VariantLoadingType = 'bouncing-dots';

export type LoadingsTypes = Record<VariantLoadingType, React.ReactNode>;

export interface ILoadingProps {
  variant?: VariantLoadingType;
}
