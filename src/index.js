/* live_yBkvF9Z54eQk85lwMo4K0kjH7Kd6OwpCTWP5G4DmYCsSMpoZFe3KuHRk7QIQI0cA
 
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_yBkvF9Z54eQk85lwMo4K0kjH7Kd6OwpCTWP5G4DmYCsSMpoZFe3KuHRk7QIQI0cA";
*/
fetch('https://api.thecatapi.com/v1/breeds')
.then((resp) => {

if(!resp.ok) {
    throw new Error('foll');
}
return resp.json(); 
})
.then((data) => console.log(data))
.cath((err) => console.log(err)); 