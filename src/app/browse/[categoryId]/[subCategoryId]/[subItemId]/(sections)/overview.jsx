import React from "react";

export default function Overview({ overview }) {
  return (
    <div className="grid w-full grid-cols-4 p-8 leading-8 border">
      {overview.features && overview.features.length > 0 && (
        <div className="col-span-4">
          <h2 className="mb-2 font-bold">Overview</h2>
          <ul className="pl-5 mb-4 list-disc">
            {overview.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
