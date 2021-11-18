import { Selector ,t} from 'testcafe';

//予約確認ページオブジェクト
export default class Confirm{
    constructor(){
        //HTML要素
        this.url = 'https://hotel.testplanisphere.dev/ja/confirm.html'
        this.totalbill = Selector('#total-bill')

    };

    async checkURL(){
        const docURI = await t.eval(() => document.documentURI);
        await t
        .expect(docURI).eql(this.url)

    }

    //スクリーンショット取得     
    async screenshot(){
        await t.takeScreenshot({
            path:'../Selenium中級練習問題1/confirm.png',
            fullPage: true
        })
    }

    

        

};






