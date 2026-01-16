import { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { Button } from 'primereact/button';

import { fetchArtworks } from '../api/artworksApi';
import SelectRowsDialog from './SelectRowsDialog';

interface Artwork {
    id: number;
    title: string;
    place_of_origin: string;
    artist_display: string;
    inscriptions: string;
    date_start: number;
    date_end: number;
}

const ArtTable = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [page, setPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);

    const [selectedArtworks, setSelectedArtworks] = useState<Artwork[]>([]);
    const [dialogVisible, setDialogVisible] = useState(false);

    useEffect(() => {
        loadData();
    }, [page]);

    const loadData = async () => {
        try {
            const res = await fetchArtworks(page);
            setArtworks(res.data);
            setTotalRecords(res.pagination.total);
        } catch (err) {
            console.error('API error:', err);
        }
    };

    const handleCustomSelect = (count: number) => {
        const selected = artworks.slice(0, count);
        setSelectedArtworks(selected);
        setDialogVisible(false);
    };

    return (
        <>
            <Button
                label="Select First N Rows"
                className="p-mb-2"
                onClick={() => setDialogVisible(true)}
            />

            <DataTable
                value={artworks}
                dataKey="id"
                selection={selectedArtworks}
                onSelectionChange={(e) => setSelectedArtworks(e.value)}
                selectionMode="checkbox"
                tableStyle={{ minWidth: '60rem' }}
            >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                <Column field="title" header="Title" />
                <Column field="place_of_origin" header="Origin" />
                <Column field="artist_display" header="Artist" />
                <Column field="inscriptions" header="Inscriptions" />
                <Column field="date_start" header="Start Year" />
                <Column field="date_end" header="End Year" />
            </DataTable>

            <Paginator
                first={(page - 1) * 12}
                rows={12}
                totalRecords={totalRecords}
                onPageChange={(e) => setPage(e.page + 1)}
            />

            <SelectRowsDialog
                visible={dialogVisible}
                onHide={() => setDialogVisible(false)}
                onApply={handleCustomSelect}
            />
        </>
    );
};

export default ArtTable;
