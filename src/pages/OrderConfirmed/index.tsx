/* eslint-disable object-shorthand */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

// import { useEffect } from 'react'
import React, { useRef, useEffect } from 'react';
import Lottie, { LottieProps } from 'react-lottie';

import { Player } from '@lottiefiles/react-lottie-player';


import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'

import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrder'
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions'

import  AnimationData from "../../assets/annimation/delivery.json";

interface LocationType {
  state: OrderData
}




export function OrderConfirmedPage() {


  // const LottieAnimation: React.FC<LottieProps> = (props) => {
  //   // ...
  // };
  
  const LottieAnimation: React.FC<LottieProps> = (animationData, ...props) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
    return (
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        {...props}
      />
    );
  };

  const { colors } = useTheme()

  const { state } = useLocation() as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>
  

  
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Oui ! Commande confirmée 😎</TitleText>
        <RegularText size="l" color="subtitle">
          Il ne reste plus qu'à attendre et bientôt le vin arrivera chez vous
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconColor={colors['brand-purple']}
            text={
              <RegularText>
                Lieu de livraison
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconColor={colors['brand-yellow']}
            text={
              <RegularText>
                Prevision du livraison
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColor={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Paiement à la livraison
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <Player
          src={AnimationData}
          className="player"
          loop
          autoplay
        />

      </section>
    </OrderConfirmedContainer>
  )
}
