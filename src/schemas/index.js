import * as yup from 'yup';
const passwordRules= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema=yup.object().shape({
    email:yup.string().email('Geçerli bir email giriniz...').required('Email girmek zorunludur...'),
    age:yup.number().positive('Lütfen pozitif bir yaş giriniz...').integer('Lütfen yaşınızı tamsayı olarak giriniz...').required('Yaş girmek zorunludur'),
    password:yup.string().min(5,'Şifre minimum 5 karakter olmalıdır...').matches(passwordRules,{
        message:'Lütfen en az 1 büyük harf en az 1 küçük harf en az bir sayı giriniz...'
    }).required('Şifre girmek zorunludur...'),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'Şifreler eşleşmiyor').required('Tekrar şifre girmek zorunludur...'),
});

export const advencedSchema=yup.object().shape({
    username:yup.string().min(3,'Kullanıcı adı minimum 3 karakter olmalıdır.').required('Kullanıcı Adı zorunludur...'),
    university:yup.string().oneOf(['bogazici','gsu','odtu','itu'],'Lütfen üviversitenizi seçiniz.').required('Lütfen üniversitenizi seçiniz.'),
    isAceepted:yup.boolean().oneOf([true],'Lütfen kullanım koşullarını kabul ediniz.').required('Kullanım koşullarını kaydetmek zorunludur.'),
    confirmPassword:yup.string().oneOf([yup.ref('password')],'Şifreler eşleşmiyor').required('Tekrar şifre girmek zorunludur...'),
})