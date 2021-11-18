import { Selector } from 'testcafe';
import FormPage from './pages/form.js';
import Confirm from './pages/confirm.js';

//PageObject
const form = new FormPage();
const confirm = new Confirm();

fixture('Hotel Planishere');

let testcase1 = '練習問題1-PageObjectパターン'
test(testcase1, async t => {

    let num = '3';
    let term = '3';
    let headcount = '2';
    let option ='sightseeing'
    let user = '井上美沙子';
    let option_value = 'no';

    await form.open();
    await form.setDate(num);
    await form.setTerm(term);
    await form.setHeadcount(headcount);
    await form.setOptions(option);
    await form.setUsername(user);
    await form.setContact(option_value);
    await form.screenshot();
    await form.submit();
    await confirm.checkURL();
    await confirm.screenshot();

    //合計金額の取得
    var bill = confirm.totalbill

    //アサーション：合計金が「47，500円」で正しいかどうか    
    await t
        .expect(Selector(bill).innerText).eql('合計 47,500円（税込み）')
       
});


