import React, { useState } from 'react';
import { TrashIcon, PrinterIcon, EditIcon, XIcon } from 'lucide-react';
export const OrderDetails = ({
  order
}) => {
  const [activeTab, setActiveTab] = useState('orderDetails');
  const [showInvoice, setShowInvoice] = useState(false);
  return <div className="border border-gray-200 rounded-md overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center pb-3">
          <div>
            <h2 className="text-lg font-semibold">ORDER-ID {order.id}</h2>
            <p className="text-gray-600">{order.company}</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2  border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 flex items-center gap-1" >
              <TrashIcon size={18} className="text-gray-500" /><span>Delete</span>
            </button>
            <button className="p-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 flex items-center gap-1">
              <PrinterIcon size={18} className="text-gray-500" /><span>Print</span>
            </button>
            <button className="p-2 border border-gray-300 text-gray-500 rounded-md hover:bg-gray-50 flex items-center gap-1">
              <EditIcon size={18} className="text-gray-500" /><span>Edit</span>
            </button>
          </div>
        </div><hr />
      </div>
      <div className="p-6">
       <div className='flex gap-4 border rounded-lg p-4'> <div className="grid grid-cols-4 gap-8 rounded-lg border p-4 w-3/4">
          
            <div className="mb-4">
              <p className="text-sm text-gray-500">Order Type</p>
              <p className="font-medium">{order.orderType}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Entity Type</p>
              <p className="font-medium">
                {order.entityType || 'Entity Formation'}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Entity Name</p>
              <p className="font-medium">{order.company}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Order Date</p>
              <p className="font-medium">
                {new Date(order.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
              </p>
            </div>
          
          
            <div className="mb-4">
              <p className="text-sm text-gray-500">Completion Date</p>
              <p className="font-medium">
                {order.completionDate ? new Date(order.completionDate).toLocaleDateString() : 'N/A'}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">State</p>
              <p className="font-medium">{order.state}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Order Placed By</p>
              <p className="font-medium">{order.placedBy || 'Mayuri Chavan'}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Account Rep</p>
              <p className="font-medium">
                {order.accountRep || 'vState Filings'}
              </p>
            </div>
          
        </div>
        <div className='border p-4 flex flex-col gap-2 rounded-lg h-40' >
          <span>{order.placedBy || 'Mayuri Chavan'}</span><hr />
          <span>{order.contactInfo.phone}</span>
          <span>{order.contactInfo.email}</span>
        </div>
        </div>
        
        <div className="flex items-center border-b border-gray-200 mt-6">
          <TabButton label="Order Details" active={activeTab === 'orderDetails'} onClick={() => setActiveTab('orderDetails')} />
          <TabButton label="Order Preview" active={activeTab === 'orderPreview'} onClick={() => setActiveTab('orderPreview')} />
          <TabButton label="Company Details" active={activeTab === 'companyDetails'} onClick={() => setActiveTab('companyDetails')} />
          <TabButton label="Documents" active={activeTab === 'documents'} onClick={() => setActiveTab('documents')} />
          <TabButton label="Communication History" active={activeTab === 'communicationHistory'} onClick={() => setActiveTab('communicationHistory')} />
        </div>
        <div className="mt-6">
          {activeTab === 'orderDetails' && <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setShowInvoice(true)}>
                <h3 className="text-lg font-medium mb-4">Receipt</h3>
                <div className="mb-4">
                  <h4 className="font-medium">
                    Articles of Organization-AK LLC
                  </h4>
                  <p className="text-sm text-gray-600">
                    The filing fee for the application as per the state selected
                  </p>
                  <p className="text-sm text-gray-600">Government fee</p>
                </div>
                <div className="text-right font-bold">$370.00</div>
              </div>
              <div className="border border-gray-200 rounded-md p-4">
                <h3 className="text-lg font-medium">Order History</h3>
              </div>
            </div>}
          {activeTab === 'orderPreview' && <div className="text-gray-600">
              Order preview content would appear here.
            </div>}
          {activeTab === 'companyDetails' && <div className="text-gray-600">
              Company details content would appear here.
            </div>}
          {activeTab === 'documents' && <div className="text-gray-600">
              Documents content would appear here.
            </div>}
          {activeTab === 'communicationHistory' && <div className="text-gray-600">
              Communication history content would appear here.
            </div>}
        </div>
      </div>
      {/* Invoice Modal */}
      {showInvoice && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[800px] max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <img src="https://i.imgur.com/2XUx7Nj.png" alt="vState Filings" className="h-8 mb-4" />
                  <p className="text-gray-600">123 Business Avenue</p>
                  <p className="text-gray-600">Suite 100</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
                <div className="flex items-start">
                  <div className="text-right mr-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      INVOICE
                    </h2>
                    <p className="text-gray-600">Invoice #: INV-{order.id}</p>
                    <p className="text-gray-600">Order ID: {order.id}</p>
                    <p className="text-gray-600">
                      Date: {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <button onClick={() => setShowInvoice(false)} className="p-1 hover:bg-gray-100 rounded">
                    <XIcon size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="border-t border-b border-gray-200 py-8 my-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Bill To:</h3>
                    <p className="text-gray-600">{order.company}</p>
                    <p className="text-gray-600">{order.contactInfo.email}</p>
                    <p className="text-gray-600">{order.contactInfo.phone}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      Service Details:
                    </h3>
                    <p className="text-gray-600">Service: {order.orderType}</p>
                    <p className="text-gray-600">State: {order.state}</p>
                    <p className="text-gray-600">
                      Entity Type: {order.entityType}
                    </p>
                  </div>
                </div>
              </div>
              <table className="w-full mb-8">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4">Description</th>
                    <th className="text-right py-3 px-4">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <p className="font-medium">
                        Articles of Organization-AK LLC
                      </p>
                      <p className="text-sm text-gray-600">
                        Government filing fee
                      </p>
                    </td>
                    <td className="text-right py-3 px-4">$270.00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <p className="font-medium">Service Fee</p>
                      <p className="text-sm text-gray-600">
                        Processing and handling
                      </p>
                    </td>
                    <td className="text-right py-3 px-4">$100.00</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-right font-medium">
                      Subtotal
                    </td>
                    <td className="text-right py-3 px-4">$370.00</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-right font-medium">Tax</td>
                    <td className="text-right py-3 px-4">$0.00</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-3 px-4 text-right">Total</td>
                    <td className="text-right py-3 px-4">$370.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-medium text-gray-800 mb-2">
                  Payment Information:
                </h3>
                <p className="text-gray-600 mb-4">
                  Please include the invoice number with your payment.
                </p>
                <div className="flex justify-end space-x-4">
                  <button onClick={() => setShowInvoice(false)} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    Close
                  </button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center">
                    <PrinterIcon size={18} className="mr-2" />
                    Print Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};
const TabButton = ({
  label,
  active,
  onClick
}) => {
  return <button className={`px-4 py-2 text-sm font-medium ${active ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`} onClick={onClick}>
      {label}
    </button>;
};