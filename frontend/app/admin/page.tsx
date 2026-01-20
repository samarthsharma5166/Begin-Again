"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "@/helper/axiosInstance";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Booking = {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
    agreementTherapeutic: boolean;
    agreementRecording: boolean;
    createdAt: string;
};

const columns: ColumnDef<Booking>[] = [
    {
        accessorKey: "fullName",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "age",
        header: "Age",
    },
    {
        accessorKey: "gender",
        header: "Gender",
    },
    {
        accessorKey: "agreementTherapeutic",
        header: "Therapy Consent",
        cell: ({ getValue }) => (getValue<boolean>() ? "Yes" : "No"),
    },
    {
        accessorKey: "agreementRecording",
        header: "Recording Consent",
        cell: ({ getValue }) => (getValue<boolean>() ? "Yes" : "No"),
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ getValue }) =>
            new Date(getValue<string>()).toLocaleString(),
    },
];

export default function Page() {
    const [data, setData] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [globalFilter, setGlobalFilter] = useState("");

    useEffect(() => {
        axiosInstance
            .get("/admin/bookings")
            .then((res) => setData(res.data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const logOutClick = async() => {
        await axiosInstance.get("/admin/logout")
        window.location.href = "/"
    };

    const exportBookings = async () => {
        const res = await axiosInstance.get("/admin/bookings/export", {
            responseType: "blob",
        });

        const blob = new Blob([res.data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "event-registrations.xlsx";
        document.body.appendChild(a);
        a.click();

        a.remove();
        window.URL.revokeObjectURL(url);
    };



    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: (row, _columnId, filterValue) => {
            const search = filterValue.toLowerCase();

            const name = row.original.fullName?.toLowerCase() ?? "";
            const email = row.original.email?.toLowerCase() ?? "";

            return name.includes(search) || email.includes(search);
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    if (loading) {
        return <p className="p-4">Loading...</p>;
    }

    return (
        <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b mb-4 gap-4">
                <h1 className="text-xl font-semibold">Bookings</h1>

                <Input
                    placeholder="Search by name or email..."
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="max-w-sm"
                />
                <div className="flex gap-2">
                <Button onClick={exportBookings}>Export</Button>
                    <Button variant={"destructive"} onClick={logOutClick}>Logout</Button>

                </div>
            </div>

            <div className="overflow-x-auto border rounded-lg">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gray-100">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 py-2 text-left text-sm font-medium border-b"
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.length === 0 && (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="text-center p-4 text-sm"
                                >
                                    No results found
                                </td>
                            </tr>
                        )}

                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50">
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        key={cell.id}
                                        className="px-4 py-2 text-sm border-b"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
