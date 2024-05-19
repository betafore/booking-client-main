"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

function AccordionSingleItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="px-6 py-1 border-2 mb-4 rounded-2xl shadow-md"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent className="font-light text-left">
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

const PackageDescription = ({
  children,
  packageName,
  packageData,
  regularData,
}: {
  children: React.ReactNode;
  packageName: string;
  packageData: any;
  regularData: any;
}) => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
      <div className="w-full max-w-screen-xl mx-auto bg-white px-5 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 mx-auto">
          <div className="max-md:order-last">
            <div className="text-sm font-light text-gray-600 my-3 space-y-3">
              {/* <AccordionSingleItem
                title="Description"
                content={packageData?.content}
              /> */}
              <h3 className="text-lg font-bold text-gray-800">Description</h3>
              <div
                className=" font-normal"
                dangerouslySetInnerHTML={{ __html: packageData?.content }}
              ></div>
            </div>

            {/* Accordion Items */}
            <div className="mt-10">
              <AccordionSingleItem
                title="Additional Information:"
                content="It is your responsibility to secure your own travel insurance and verify that your policy does not contain exclusion clauses that limit coverage for the activities you plan to engage in. We strongly advise obtaining comprehensive travel insurance to safeguard you in all situations, covering medical expenses, injuries, fatalities, repatriation costs, death, air ambulance and helicopter rescue services, and any activities you plan to partake in.<br><br>
                <b>During Banff To Moraine & Lake Louise Shuttle Service:</b><br><br> 
                If your bag fits on your lap or under your seat then yes you can. Unfortunately we do not have space for larger bags. <br><br> 
                <b>During Full Day Long Tour:</b> <br><br> 
                If your bag fits on your lap or under your seat then yes you can. Unfortunately we do not have space for larger bags. <br><br>
                <b>Calgary To Banff / Banff to Calgary:</b> <br><br> 
                1 Carry On & 1 small bag is allowed <br><br> 
                <b>Private / Charter Service:</b> <br><br> 
                If your party size is fewer than 10 passengers, you may bring a few carry-on items. However, if your party size is 13 passengers, only items that can fit on your lap are allowed. If you have any questions regarding this policy, please feel free to call us."
              />
              <AccordionSingleItem
                title="What is the Cancellation Policy?"
                content="<b>72 Hours before:</b> 
                You have the flexibility to modify the time & date of your departure free of charge. Please log in to your account and request a change of date. Our customer service team will then reach out to you to confirm the requested change. However, there are no refunds for ticket cancellations. We encourage you to reschedule as needed to ensure you can still visit Moraine Lake and Lake Louise. <br><br>
                <b>Within 72 Hours:</b> 
                No changes or modifications are permitted. Visitors often plan their trips around visiting Moraine Lake, and shuttle service is their primary transportation option. To respect others' needs for shuttle service, we require ample planning and booking time. <br> <br>
                Shuttle to Moraine & Louise Inc. reserves the right to modify or cancel any scheduled or charter service due to insufficient bookings, unfavourable driving conditions, or other factors without penalty to Shuttle to Moraine & Louise Inc. Guests will be promptly notified via email of any changes. In the rare event of service cancellation by Shuttle to Moraine & Louise Inc., a full refund will be issued."
              />
            </div>
          </div>

          {/* Booking section with Calender */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PackageDescription;
