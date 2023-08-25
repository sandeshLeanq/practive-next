"use client";
import React from "react";
import { TextInputField } from "../Form/InputField";

type Props = {
  useFormik: any;
};

const SocialLinks = ({ useFormik }: Props) => {
  const formik = useFormik;
  const handleLinkValueChange = (type: any, value: any) => {
    formik.setFieldValue(type, value);
  };
  return (
    <div>
      <div className="mb-2 font-semibold">Social Links</div>
      {formik.values.links.map((socials: any, index: any) => {
        return (
          <TextInputField
            label=""
            placeholder={`${socials.type} URL`}
            name={socials.type}
            key={socials.type}
            value={socials.url}
            onChange={(e: any) =>
              handleLinkValueChange(`links.[${index}].url`, e.target.value)
            }
            fullWidth
          />
        );
      })}
    </div>
  );
};

export default SocialLinks;
