import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import './FormClient.css'; // Import your CSS file for styling
import { IoIosArrowForward } from 'react-icons/io';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const Formlient = () => {
  return (
    <div className="form-container">
      <h1>Consultez vos contrats sur votre espace LINXEA</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <div className="form-field">
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
          </div>
          <div className="form-field">
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="Password..."
            />
          </div>
          <div className='reconnecter'>
            <div className='link-connecter'>   <span className='flesh-co'><IoIosArrowForward /></span>Identifiant oublié</div> 
            <span className='border-r'></span>
            <div className='link-connecter'>   <span className='flesh-co'><IoIosArrowForward /></span>Mot de passe oublié</div>
          </div>

          <div className="center-button">
            <button type="submit">Se connecter</button>
          </div>
          <div className='to-activate-account'>
            <hr/>
                <a className="" href="/activation-de-compte">Obtenir mon accès à l'Espace client</a>
        </div>
    
          
        </Form>
      </Formik>
    </div>
  );
};
