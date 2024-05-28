export const moneyFormat = ( value: number ): string => {
  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format( value as number );
}
