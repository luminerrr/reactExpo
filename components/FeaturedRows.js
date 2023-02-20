import { View, Text, ScrollView } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

const FeaturedRows = ({title, description }) => {

    return(
        <View>
            <View className='flex-row mt-4 items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color='#00CCBB'/>
            </View>

            <Text className='text-xs text-gray-500 px-4'>{description}</Text>

            <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal:15,
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
            >
                {/* Restaurant Cards */}

                <RestaurantCards 
                    id='1'
                    imgUrl='https://links.papareact.com/gn7'
                    title='Sushi'
                    genre='Japanese'
                    address='123 Main st'
                    short_description='This is test description'
                    rating={4.5}
                    dishes={[]}
                    long={20}
                    lat={10}
                    />
                <RestaurantCards 
                    id='1'
                    imgUrl='https://links.papareact.com/gn7'
                    title='Sushi'
                    genre='Japanese'
                    address='123 Main st'
                    short_description='This is test description'
                    rating={4.5}
                    dishes={[]}
                    long={20}
                    lat={10}
                    />
                <RestaurantCards 
                    id='1'
                    imgUrl='https://links.papareact.com/gn7'
                    title='Sushi'
                    genre='Japanese'
                    address='123 Main st'
                    short_description='This is test description'
                    rating={4.5}
                    dishes={[]}
                    long={20}
                    lat={10}
                    />
                <RestaurantCards 
                    id='1'
                    imgUrl='https://links.papareact.com/gn7'
                    title='Sushi'
                    genre='Japanese'
                    address='123 Main st'
                    short_description='This is test description'
                    rating={4.5}
                    dishes={[]}
                    long={20}
                    lat={10}
                    />
            </ScrollView>
        </View>
    )
}

export default FeaturedRows;