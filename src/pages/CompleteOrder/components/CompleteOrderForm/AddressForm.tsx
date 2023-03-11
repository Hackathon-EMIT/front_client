import { AddressFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <div className="row">
        <Input
          placeholder="CP"
          type="number"
          className="cep"
          {...register('cep')}
          error={errors.cep?.message}
        />
      </div>
      <div className="row">
        <Input
          placeholder="Rue"
          className="street"
          {...register('street')}
          error={errors.street?.message}
        />
      </div>
      <div className="row">
        <Input
          type="number"
          placeholder="Numero de telephone"
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          placeholder="complement"
          className="complement"
          {...register('complement')}
          error={errors.complement?.message}
          rightText="Opcional"
        />
      </div>
      <div className="row">
        <Input
          placeholder="Quartier"
          {...register('district')}
          error={errors.district?.message}
        />
        <Input
          placeholder="Cite"
          className="city"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          placeholder="UF"
          className="uf"
          {...register('uf')}
          error={errors.uf?.message}
        />
      </div>
    </AddressFormContainer>
  )
}
