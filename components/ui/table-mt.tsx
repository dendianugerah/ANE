interface Maintenance {
    id: string; 
    name: string; 
    merk: string;
    type: string;
    serialnum: string;
    createAt: Date;   
}

const MaintenanceTable = ({maintenancesdb}:{maintenancesdb:Maintenance[]}) => {
    console.log("tes 3", maintenancesdb)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="py-3 px-4">#</th>
                        <th className="py-3 px-4">Nama</th>
                        <th className="py-3 px-4">Merk</th>
                        <th className="py-3 px-4">Tipe</th>
                        <th className="py-3 px-4">No Seri</th>
                        <th className="py-3 px-4">Link Maintenance</th>
                    </tr>
                </thead>
                <tbody>
                    {maintenancesdb?.map((maintenancedb: Maintenance, index: number) => (
                        <tr key={maintenancedb.id}>
                            <td className="py-3 px-4">{index + 1}</td>
                            <td className="py-3 px-4">{maintenancedb.name}</td>
                            <td className="py-3 px-4">{maintenancedb.merk}</td>
                            <td className="py-3 px-4">{maintenancedb.type}</td>
                            <td className="py-3 px-4">{maintenancedb.serialnum}</td>
                            <td className="py-3 px-4">Link</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default MaintenanceTable;