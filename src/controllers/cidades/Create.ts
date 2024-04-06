import { Request, Response } from "express";
import * as yup from 'yup';

import {Icidade } from '../../models/cidade/Icidade'

const bodyRequest: yup.Schema<Icidade> = yup.object().shape({
  name: yup.string().required().min(5),
});

export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
  let data : Icidade | undefined = undefined;
  try{
    data =  await bodyRequest.validate(req.body);
  }catch(error){
    const erros = error as yup.ValidationError;

    return res.json({
      errors:{
        default: erros.message,
      }
    })
  }

  console.log( data);

  return res.send('create!')
}