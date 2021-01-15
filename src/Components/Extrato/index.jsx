import React from "react";
import { Box, Botao } from "../../Components/ui/index.js";
import { extratoLista } from "../../info.js";
import Items from '../../Components/Items/'

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        return (
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
