
import { JSON } from '@kit.ArkTS';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';


  aboutToAppear(): void {
    let jsontext='{"name":"xuqing","age":30,"city":"深圳"}'
    let obj=JSON.parse(jsontext);
    console.log("index getname   "+ (obj as object)?.["name"]);

    console.log("index getage   "+ (obj as object)?.["age"]);

    console.log("index getcity   "+ (obj as object)?.["city"]);

    //this.personInterFace();
      this.personClass();
  }


  personInterFace(){
    interface Person{
      name:string,
      age:number,
      city:string
    }
    let jsontext='{"name":"xuqing","age":30,"city":"深圳"}'
    let person:Person=JSON.parse(jsontext) as Person;
    console.log("personInterFace getname   "+ person.name);
    console.log("personInterFace getage   "+ person.age);
    console.log("personInterFace getCity   "+ person.city);
  }

  personClass(){
    class Person{
      name:string="";
      age:number=0;
      city:string="";
    }
    let jsontext='{"name":"xuqing","age":30,"city":"深圳"}'
    let person:Person=JSON.parse(jsontext) as Person
    console.log("personClass ===> get name"+person.name);
    console.log("personClass ===> get age"+person.age);
    console.log("personClass ===> get city"+person.city);

  }

  build() {
    RelativeContainer() {
      Text(this.message)
        .id('HelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
    }
    .height('100%')
    .width('100%')
  }
}