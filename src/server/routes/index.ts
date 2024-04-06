import { Router } from 'express'
import { CidadesController } from '../../controllers'

const router = Router();

router.get('/', (req, res)=>{
  return res.send('ola mundo!');
})

/*Routes cidades*/
router.get('/cidades', CidadesController.list)
router.post('/cidades', CidadesController.create)
router.put('/cidades', CidadesController.update)

export { router };