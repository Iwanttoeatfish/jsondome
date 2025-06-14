if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    message?: string;
}
import JSON from "@ohos:util.json";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    aboutToAppear(): void {
        let jsontext = '{"name":"xuqing","age":30,"city":"深圳"}';
        let obj = JSON.parse(jsontext);
        console.log("index getname   " + (obj as object)?.["name"]);
        console.log("index getage   " + (obj as object)?.["age"]);
        console.log("index getcity   " + (obj as object)?.["city"]);
        //this.personInterFace();
        this.personClass();
    }
    personInterFace() {
        interface Person {
            name: string;
            age: number;
            city: string;
        }
        let jsontext = '{"name":"xuqing","age":30,"city":"深圳"}';
        let person: Person = JSON.parse(jsontext) as Person;
        console.log("personInterFace getname   " + person.name);
        console.log("personInterFace getage   " + person.age);
        console.log("personInterFace getCity   " + person.city);
    }
    personClass() {
        class Person {
            name: string = "";
            age: number = 0;
            city: string = "";
        }
        let jsontext = '{"name":"xuqing","age":30,"city":"深圳"}';
        let person: Person = JSON.parse(jsontext) as Person;
        console.log("personClass ===> get name" + person.name);
        console.log("personClass ===> get age" + person.age);
        console.log("personClass ===> get city" + person.city);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.height('100%');
            RelativeContainer.width('100%');
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.message);
            Text.id('HelloWorld');
            Text.fontSize(50);
            Text.fontWeight(FontWeight.Bold);
            Text.alignRules({
                center: { anchor: '__container__', align: VerticalAlign.Center },
                middle: { anchor: '__container__', align: HorizontalAlign.Center }
            });
        }, Text);
        Text.pop();
        RelativeContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.jsondemo", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
