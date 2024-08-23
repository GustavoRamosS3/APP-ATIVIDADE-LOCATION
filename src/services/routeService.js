import Parse from '../config/parseConfig';

export const saveRoute = async (route) => {
  const Route = Parse.Object.extend('Route');
  const routeObject = new Route();
  
  routeObject.set('name', route.name);
  routeObject.set('coords', route.coords);
  routeObject.set('time', route.time);
  routeObject.set('distance', route.distance);
  routeObject.set('date', route.date);
  
  try {
    await routeObject.save();
  } catch (error) {
    throw new Error('Erro ao salvar rota: ' + error.message);
  }
};

export const getRoutes = async () => {
  const query = new Parse.Query('Route');
  
  try {
    const results = await query.find();
    return results.map(result => ({
      name: result.get('name'),
      coords: result.get('coords'),
      time: result.get('time'),
      distance: result.get('distance'),
      date: result.get('date'),
    }));
  } catch (error) {
    throw new Error('Erro ao buscar rotas: ' + error.message);
  }
};
