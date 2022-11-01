import React from 'react'
import { Formik } from 'formik'

import styled from '@emotion/styled'
import { MyLabelRange } from './MyLabelRange'
import { MyLabelRadio } from './MyLabelRadio'
import { MyButton } from './MyButton'


 
const FormStyle = styled.form`
    background: white;
    color: black;
                
    margin: 0 auto;
    box-sizing: border-box;
    Width:699px;
    Height:660px;
    padding:0;
    padding-top:40px;

    border-radius: 40px;
    border: 20px solid grey;
    
    
    zIndex: '1';
    position: 'relative'
`

 

export const MyForm = () => {

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(e)


  //   console.log('onSubmit')

  // //  await fetch('http://localhost:3000/api/hello',
  // // {
  // //   method: 'PUT',
  // //   headers: { 'Content-Type': 'application/json'  },
  // //   body: JSON.stringify({
  // //     mainParams: {
  // //       quantity: 11,
  // //       valuesRange: 11,
  // //       order: 'high'
  // //     }
  // //   })
  // // })
  // // .then(res => res.json())
  // // .then(json => console.log(json))

 
  //  }

  return (
 <Formik
      initialValues={{ quantity: '2', values: '1' }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.quantity) {
      //      errors.quantity = 'Required';
      //    } else if (
      //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //    ) {
      //      errors.email = 'Invalid email address';
      //    }
      //    return errors;
      //  }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <FormStyle onSubmit={handleSubmit}>

          <MyLabelRange name='quantity' label='Кол-во предметов' legend={[2, 3, 4, 5]} width='355px' myRangeParams={{ min: 2, max: 5, step: 1 }}
            onChange={handleChange} onBlur={handleBlur} value={values.quantity} />
          <MyLabelRange name='values' label='Значения' legend={['A', 9, 19, 50, 99, 999]} width='530px' myRangeParams={{ min: 1, max: 6, step: 1 }}
            onChange={handleChange} onBlur={handleBlur} value={values.values} />

          <fieldset style={{ border: 'none', display: 'flex', justifyContent: 'space-between', width: '551px', margin: '0 auto', padding: '10px 0' }} >
            <MyLabelRadio label='По возрастанию' width='271px' myRadioParams={{ name: 'radio1', value: 'high' }}
              onChange={handleChange} onBlur={handleBlur} value={values.radio1} />
            <MyLabelRadio label='По убыванию' width='234px' myRadioParams={{ name: 'radio2', value: 'low' }}
              onChange={handleChange} onBlur={handleBlur} value={values.radio2} />
          </fieldset>

          <MyButton text='Играть' disabled={isSubmitting} />

           {/*  <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           /> */}
            {/* <button type="submit" disabled={isSubmitting}>
             Submit
           </button> */}
        </FormStyle>
       )}
     </Formik>


 
  
    

  )
}
