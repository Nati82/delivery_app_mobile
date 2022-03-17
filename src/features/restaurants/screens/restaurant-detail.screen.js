import React, { useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utilities/safe-area.component";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const restaurant = route.params;
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [drinks, setDrinks] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfast}
          onPress={() => setBreakfast(!breakfast)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunch}
          onPress={() => setLunch(!lunch)}
        >
          <List.Item title="Burger w/fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinner}
          onPress={() => setDinner(!dinner)}
        >
          <List.Item title="Steak Fries" />
          <List.Item title="Veal Cutlet With Chicken Mushroom" />
          <List.Item title="Spaghetti Bolognese" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinks}
          onPress={() => setDrinks(!drinks)}
        >
          <List.Item title="Tea" />
          <List.Item title="Coffee" />
          <List.Item title="Fanta" />
          <List.Item title="Coke" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
