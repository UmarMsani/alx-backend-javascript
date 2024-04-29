import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Associates routes with their respective handlers in the
 * provided Express application.
 * @param {Express} app The Express application  instance.
 * @author Umar Muhammad Sani <https://github.com/UmarMsani>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
