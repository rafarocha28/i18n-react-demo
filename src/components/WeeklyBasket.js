
import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useTranslation } from "react-i18next";
import { languageCodeOnly } from "../services/i18n";

function WeeklyBasket(props) {
  const [items, setItems] = useState([]);
  const { i18n } = useTranslation();
  const dataJsonFile = `/data/${languageCodeOnly(i18n.language)}.json`;
  
  useEffect(() => {
    fetch(dataJsonFile)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [i18n.language]);

  const { t } = useTranslation();
  if (items.length === 0) {
    return <p>{t("loading")}</p>;
  } else {
    return (
      <div className="columns is-multiline">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default WeeklyBasket;