import {Text, TouchableOpacity, Image } from "react-native"

const CategoryCard = ({imgUrl, title}) => {
    return(
        <TouchableOpacity className="relative mr-2">
            <Image source={{
                uri:imgUrl,
            }} 
            className='w-20 h-20 rounded'/>
            <Text className="font-bold absolute bottom-1 left-1 text-white">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;