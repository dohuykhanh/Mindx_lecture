import Card from "./components/Card";
import "./App.css";

function App() {
  // const randomAge = Math.floor(Math.random() * 10);
  // const imgSrc =
  //   "https://icdn.dantri.com.vn/2022/07/05/img1692-1657020368276.jpg?watermark=true";
  // const isYourBirthday = false;
  // const weekDays = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];
  const listCard = [
    {
      name: 'This is Card',
      id: 1
    },
    {
      name: 'This is Card',
      id: 2
    },
    {
      name: 'This is Card',
      id: 3
    },
    {
      name: 'This is Card',
      id: 4
    },
  ]
  const printWord = (func) => {
    func()
  }
  return (
    <div>
      {/* <h1>Your age is {randomAge}</h1>
      <img alt="" className="img-container" src={imgSrc} /> */}
      {/* If (isYourBirthday) ==> render text */}
      {/* {isYourBirthday && <h4>This is your birthday</h4>}
      {!isYourBirthday && <h4>This is not your birthday</h4>} */}
      {/* { for (let day of weekDays) {
        return (<span>day</span>)
      }} */}
      {/* {weekDays.map((el) => {
        return <div style={
          {marginTop: 10}
        }>{el}</div>;
      })} */}
      {listCard.map((el) => {
        return <Card name={el.name} id={el.id} print={printWord}/>
      })}
    </div>
  );
}

export default App;

// Viet 1 ham random so tuoi cua 1 ban nam

// Math.floor(0.3) ==> 1
// Math.floor(5.2) ==> 6
// Math.random() ==> 0.34, 0.2

// Math.random() * 10 ==>  3.4, 2 ==> Math.floor(3.4) ==>  4

// document.getElementById('') ==> alias cho element thanh 1 variable
// assign value cho variable

// Tao ra 1 cai variable (boolean) ==>
// if (true) ==> render text ==> 'Happy birthday'
// if (false) ==> render text ==> 'This is not your birthday'

// In ra man hinh 1 mang gom cac ngay trong tuan

// Tao ra 3 cai Card (Viet 1 component Card). Card se la component con cua component App
// Tao mang gom 3 phan tu. Voi moi 1 gia tri trong mang ==> truyen vao prop khac nhau cho component Card
