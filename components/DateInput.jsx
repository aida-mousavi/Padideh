"use client";

import {Controller} from "react-hook-form";
import DatePicker, {DateObject} from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";

import "react-multi-date-picker/styles/layouts/prime.css";
// -------------------------------------------------------------------------------

const CalendarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 1.5V3.75" stroke="#294580" strokeLinecap="round"/>
        <path d="M12 1.5V3.75" stroke="#294580" strokeLinecap="round"/>
        <path d="M2.625 6.817H15.375" stroke="#294580" strokeLinecap="round"/>
        <path
            d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
            stroke="#294580"
            strokeLinecap="round"
        />
    </svg>
);

// --------------------------------------------


export default function DateInput({
                                      name,
                                      control,
                                      label,
                                      defaultValue,
                                      required = false,
                                      withTime = false,
                                      format = "YYYY-MM-DD",
                                      className,
                                      containerClassName,
                                  }) {
    return (
        <div className={containerClassName}>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue || ""}
                rules={{
                    required: required ? "انتخاب تاریخ الزامی است" : false,
                }}
                render={({field: {onChange, value}, fieldState: {error}}) => (
                    <>
                        {label && (
                            <p className="mb-1 text-sm text-gray-600">
                                {label}
                                {required && <span className="text-red-500">*</span>}
                            </p>
                        )}

                        <div className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                                <CalendarIcon/>
                            </div>

                            <DatePicker
                                value={
                                    value
                                        ? new DateObject(value)
                                            .convert(persian, persian_fa)
                                            .format(format)
                                        : null
                                }
                                onChange={(date) => {
                                    const gregorianValue = new DateObject(date)
                                        .convert(gregorian, gregorian_en)
                                        .format(format);

                                    onChange(gregorianValue);
                                }}
                                format={format}
                                calendar={persian}
                                locale={persian_fa}
                                plugins={
                                    withTime
                                        ? [<TimePicker key="time" position="bottom"/>]
                                        : []
                                }
                                className="w-full"
                                containerClassName={`w-full ${className}`}
                                inputClass="p-2 pl-10 border border-gray-400 rounded-lg w-full"
                                portal
                            />
                        </div>

                        {error?.message && (
                            <p className="text-xs text-red-500 mt-1">
                                {error.message}
                            </p>
                        )}
                    </>
                )}
            />
        </div>
    );
}
