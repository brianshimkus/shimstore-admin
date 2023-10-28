'use client'

import { Modal } from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const StoreModal = () => {
	const storeModal = useStoreModal()
	const router = useRouter()

	const [loading, setLoading] = useState(false)

	return (
		<Modal
			title='Create store'
			description='Add a new store to manage products and categories.'
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}>
			<p>Hello</p>
		</Modal>
	)
}
