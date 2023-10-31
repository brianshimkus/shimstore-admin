import prismadb from '@/lib/prismadb'

interface DashboardPageProps {
	params: {
		storeId: string
	}
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
	const store = await prismadb.store.findFirst({
		where: {
			id: params.storeId,
		},
	})

	return (
		<>
			<h1>{store?.name}</h1>
		</>
	)
}
export default DashboardPage
