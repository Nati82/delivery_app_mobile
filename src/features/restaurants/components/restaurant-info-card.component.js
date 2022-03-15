import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Closed,
  Address,
  Food,
  Star,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjdnNlFpQRO9IlqpMRTEXsJMtmeL0lcwtiiw&usqp=CAU",
    ],
    address = "address",
    rating = 5,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((rating, index) => (
              <Star key={index} icon="star" color="#fcdb03" />
            ))}
          </Rating>
          <SectionEnd>
            <Spacer>
              {isClosedTemporarily && <Closed>Closed Temporarily</Closed>}
            </Spacer>
            <Spacer>{isOpenNow && <Food icon="food" />}</Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
