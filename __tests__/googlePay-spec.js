import { GooglePay, Customer } from '../src/googlePay';

test('Payment testing', () => {
    let googlepay = new GooglePay();
    let karthick = new Customer('karthick');
    let sathish = new Customer('sathish');
    googlepay.register_customer(karthick);
    googlepay.register_customer(sathish);
    karthick.send_money(1000, 'shekar');
    sathish.send_money(2000, 'karthick');
    karthick.send_money(3000, 'sathish');
});
