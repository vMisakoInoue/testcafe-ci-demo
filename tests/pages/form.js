import { Selector, t } from 'testcafe'

//宿泊予約ページオブジェクト
export default class FormPage {

  
    constructor(){
        //HTML要素
        this.url = 'https://hotel.testplanisphere.dev/ja/reserve.html?plan-id=0'
        this.inputDate = Selector('#date')
        this.closeButton = Selector('div.ui-datepicker-buttonpane.ui-widget-content > button')
        this.inputTerm = Selector('#term')
        this.inputHeadcount = Selector('#head-count')
        this.breakfast = Selector('#breakfast')
        this.earlycheckin = Selector('#early-check-in')
        this.sightseeing = Selector('#sightseeing')
        this.inputUsername = Selector('#username')
        this.contactSelect = Selector('#contact')
        this.contactOption = this.contactSelect.find('option')
        this.submitButton = Selector('#submit-button')
        this.message1 = Selector('div.form-group.was-validated > small')
        this.message2 = Selector('div.form-group.was-validated > div')
        this.message3 = Selector('div:nth-child(8) > div');
    };

    let(){
        this.num = test.num
        this.term = test.term
        this.headcount = test.headcount
        this.user = test.user
        this.option_value = test.option_value
        this.option = test.option

    };

        async open(){
            await t.navigateTo(this.url)
        }

        //宿泊日
        async setDate(num) {
            let now = require('moment')
            let YYYYMMDD = now().add(num, 'd').format('YYYY/M/D') 
    
            await t
                .click(this.inputDate).pressKey('ctrl+a delete')  
                .click(this.inputDate)
                .pressKey('ctrl+a delete')
                .typeText(this.inputDate, YYYYMMDD)
                .click(this.closeButton)
        }
    
        //宿泊日数
        async setTerm(term){
            await t
                .click(this.inputTerm)
                .pressKey('ctrl+a delete')
                .typeText(this.inputTerm, term)
        }
    
        //宿泊人数
        async setHeadcount(headcount){
            await t
                .click(this.inputHeadcount)
                .pressKey('ctrl+a delete')
                .typeText(this.inputHeadcount, headcount)
                
        }
    
        //追加プラン
        async setOptions(option){
            if(option == 'breakfast'){
                await t.click(this.breakfast)

            }else if(option == 'earlycheckin'){
                await t.click(this.earlycheckin)

            }else if(option == 'sightseeing'){
                await t.click(this.sightseeing)

            }           

        }
    
        //名前
        async setUsername(user){
            await t
                .click(this.inputUsername)
                .pressKey('ctrl+a delete')
                .typeText(this.inputUsername, user)
        }
    
        //確認の連絡
        async setContact(option_value){    
            await t
                .click(this.contactSelect)
                .click(Selector(this.contactOption).filter('[value='+ option_value +']'))
        }
    
        //予約処理
        async submit(){
            await t.click(this.submitButton)
        }
    
        //スクリーンショット取得
        async screenshot(){
            await t.takeScreenshot({
                path:'../Selenium中級練習問題1/reserve.png',
                fullPage: true
            })
        }


};
    
