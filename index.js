// 模組化
import { ClothSize } from "./src/Enum/Enum.js";
import { GetEnumCollection } from "./src/Utility/Utility.js";

{
    // 重構
    let result = GetEnumCollection(ClothSize, x => x.filter(c => c.Breast >= 100))
    console.log(result)
    

}


