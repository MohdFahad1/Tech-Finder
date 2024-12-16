import {
  HuggingFaceIcon,
  KaggleIcon,
  KerasIcon,
  OpenCVIcon,
  PythonIcon,
  PyTorchIcon,
  TensorFlowIcon,
} from "@/components/icons";
import { RIcon } from "@/components/icons/r";
import { Sparkle } from "lucide-react";

export const categoryData = {
  name: "AI & ML Development",
  description:
    "Building algorithms and models for tasks that require human-like cognition and learning.",
  icon: <Sparkle className="w-6 h-6 text-gray-900" />,
  path: "/browse/ai-ml-development",
  subCategories: [
    {
      name: "Languages",
      path: "languages",
      items: [
        {
          name: "Python",
          slug: "python",
          url: "https://python.org/",
          icon: PythonIcon,
          tags: ["Languages"],
        },
        {
          name: "R",
          slug: "r",
          url: "https://r-project.org/",
          icon: RIcon,
          tags: ["Languages"],
        },
      ],
    },
    {
      name: "Platforms",
      path: "platforms",
      items: [
        {
          name: "Kaggle",
          slug: "kaggle",
          url: "https://kaggle.com/",
          icon: KaggleIcon,
          tags: ["Platform"],
        },
        {
          name: "HuggingFace",
          slug: "hugging-face",
          url: "https://huggingface.co/",
          icon: HuggingFaceIcon,
          tags: ["Platform"],
        },
      ],
    },
    {
      name: "Libraries",
      path: "libraries",
      items: [
        {
          name: "OpenCV",
          slug: "opencv",
          url: "https://opencv.org/",
          icon: OpenCVIcon,
          tags: ["Library"],
        },
        {
          name: "Keras",
          slug: "keras",
          url: "https://keras.io/",
          icon: KerasIcon,
          tags: ["Library"],
        },
      ],
    },
    {
      name: "Frameworks",
      path: "frameworks",
      items: [
        {
          name: "TensorFlow",
          slug: "tensor-flow",
          url: "https://tensorflow.org/",
          icon: TensorFlowIcon,
          tags: ["Framework"],
        },
        {
          name: "PyTorch",
          slug: "pytorch",
          url: "https://pytorch.org/",
          icon: PyTorchIcon,
          tags: ["Framework"],
        },
      ],
    },
  ],
};
