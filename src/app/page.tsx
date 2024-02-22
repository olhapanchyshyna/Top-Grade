import Advantages from '@/components/Advantages'
import FirstScreen from '@/components/FirstScreen'
import GrowthPoint from '@/components/GrowthPoint'
import HelpGrowBudget from '@/components/HelpGrowBudget'
import Recommendations from '@/components/Recommendations'
import Service from '@/components/Service'
import Steps from '@/components/Steps'



export default function Home() {
	return (
		<>
      <FirstScreen/>
			<GrowthPoint/>
			<Steps/>
			<Service/>
			<Advantages/>
			<Recommendations/>
			<HelpGrowBudget/>
    </>
	)
}
