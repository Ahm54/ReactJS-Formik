import React from 'react'
import {Form, Formik} from 'formik';
import CustomInput from './CustomInput';
import { advencedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckBox from './CustomCheckBox';
import {Link} from 'react-router-dom';


const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    });
    actions.resetForm();
};

function portalform() {
  return (
    <>
       <Formik
       initialValues={{ username: '', university: 'red', isAccepted: false}}
       onSubmit={onSubmit}
       validationSchema={advencedSchema}
     >
       {({isSubmitting}) => (
         <Form>
           <CustomInput
           label="Kullanıcı Adı" name="username" type="text" placeholer="Kullanıcı adınızı giriniz..."
           />
          <CustomSelect
          label="Okulunuz" name="univesity" placeholder="Lütfen üniversitenizi seçiniz." 
          >
            <option value="">Lütfen üniversitenizi seçiniz</option>
            <option value="bogazici">Boğaziçi Üniversitesi</option>
            <option value="gsu">Galatasaray Üniversitesi</option>
            <option value="odtu">ODTÜ</option>
            <option value="itu">İTÜ</option>
          </CustomSelect>
            <CustomCheckBox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">Kaydet</button>
            <Link className='formLink' to='/'>Ana forma git</Link>
         </Form>
       )}
     </Formik> 
    </>
  )
}

export default portalform
