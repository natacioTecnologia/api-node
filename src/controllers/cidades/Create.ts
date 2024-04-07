import { Request, Response } from "express";
import * as yup from 'yup';

import {Icidade } from '../../models/cidade/Icidade'

const bodyRequest: yup.Schema<Icidade> = yup.object().shape({
  name: yup.string().required().min(5),
  estado: yup.string().required().max(2),
});

export const create = async (req: Request<{}, {}, Icidade>, res: Response) => {
  let data : Icidade | undefined = undefined;

  try{
    data =  await bodyRequest.validate(req.body,{abortEarly: false});
  }catch(error){
    const erros = error as yup.ValidationError;
    const errors: Record<string, string> = {}

    erros.inner.forEach(e=>{
      if(!e.path) return;
      errors[e.path] = e.message;
    })

    return res.json({
      errors: errors
    })
  }

  console.log( data);

  return res.send('create!')
}