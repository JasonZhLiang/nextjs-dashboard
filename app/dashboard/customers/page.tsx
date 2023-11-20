import { Metadata } from 'next';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({ searchParams,
}: {
    searchParams?: {
        query?: string;
        // page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);
    return <Table customers={customers} />;
}