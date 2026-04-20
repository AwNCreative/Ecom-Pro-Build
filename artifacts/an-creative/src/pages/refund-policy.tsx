import { motion } from "framer-motion";

export default function RefundPolicy() {
  return (
    <div className="w-full pt-12 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-black text-foreground mb-2">سياسة الاسترداد</h1>
          <p className="text-lg text-muted-foreground mb-1 font-semibold">Refund Policy</p>
          <p className="text-muted-foreground mb-12">آخر تحديث: ١٩ أبريل ٢٠٢٦ · Last updated: April 19, 2026</p>

          <div className="prose prose-slate dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none">

            {/* Arabic Section */}
            <div className="mb-14">
              <h2 className="text-xl font-black text-foreground border-b border-border pb-2 mb-6">القسم العربي</h2>

              <h3>١. طبيعة المنتجات الرقمية</h3>
              <p>
                جميع المنتجات المباعة عبر متجر A&N Creative هي منتجات رقمية (كتب إلكترونية، أدلة، ملفات PDF قابلة للتنزيل). بطبيعة هذه المنتجات الرقمية، يُعدّ البيع نهائياً وغير قابل للإلغاء فور توفير رابط التنزيل أو الوصول إليه من قِبل العميل.
              </p>

              <h3>٢. سياسة عدم الاسترداد</h3>
              <p>
                نظراً لطبيعة المحتوى الرقمي القابل للنسخ، <strong>لا نقدّم أي استردادات مالية أو استبدالات</strong> بعد إتمام عملية الشراء والوصول إلى الملف، إلا في الحالات التالية:
              </p>
              <ul>
                <li><strong>عيب تقني مؤكّد في الملف:</strong> إذا تعذّر فتح الملف أو كان تالفاً أو ناقصاً بشكل موثّق، يحق للعميل طلب ملف بديل.</li>
                <li><strong>تسليم ملف خاطئ:</strong> إذا تلقّى العميل ملفاً مختلفاً عن المنتج الذي اشتراه، يحق له الحصول على الملف الصحيح أو استرداد كامل.</li>
              </ul>
              <p>
                لا تُقبل طلبات الاسترداد في الحالات التالية: عدم الرضا عن المحتوى، تغيير رأي العميل بعد الشراء، أو الادعاء بعدم قراءة الملف.
              </p>

              <h3>٣. إجراء طلب الدعم</h3>
              <p>
                إذا واجهت مشكلة تقنية موثّقة في الملف، يُرجى التواصل معنا خلال <strong>٧ أيام</strong> من تاريخ الشراء عبر البريد الإلكتروني التالي، مع إرفاق دليل على المشكلة (صورة شاشة أو وصف تفصيلي):
              </p>
              <p>
                <a href="mailto:ahmedosamaqotyifan@gmail.com" className="font-bold hover:underline">ahmedosamaqotyifan@gmail.com</a>
              </p>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-border my-10" />

            {/* English Section */}
            <div dir="ltr" className="text-left">
              <h2 className="text-xl font-black text-foreground border-b border-border pb-2 mb-6">English Section</h2>

              <h3>1. Nature of Digital Products</h3>
              <p>
                All products sold through the A&N Creative store are digital products (e-books, guides, downloadable PDF files). Due to the nature of digital content, <strong>all sales are considered final and non-refundable</strong> once the download link has been provided or accessed by the customer.
              </p>

              <h3>2. No Refund Policy</h3>
              <p>
                Because digital files can be copied and retained immediately upon download, <strong>we do not offer refunds or exchanges</strong> after a purchase has been completed and the file has been accessed, except in the following cases:
              </p>
              <ul>
                <li><strong>Confirmed technical defect in the file:</strong> If the file cannot be opened, is corrupted, or is demonstrably incomplete, the customer is entitled to request a replacement file.</li>
                <li><strong>Wrong file delivered:</strong> If the customer receives a file different from the product they purchased, they are entitled to receive the correct file or a full refund.</li>
              </ul>
              <p>
                Refund requests will <strong>not</strong> be accepted for the following reasons: dissatisfaction with content, change of mind after purchase, or claiming the file was not read.
              </p>

              <h3>3. How to Request Support</h3>
              <p>
                If you experience a documented technical issue with your file, please contact us within <strong>7 days</strong> of your purchase date via the email address below. Include evidence of the issue (a screenshot or detailed description):
              </p>
              <p>
                <a href="mailto:ahmedosamaqotyifan@gmail.com" className="font-bold hover:underline">ahmedosamaqotyifan@gmail.com</a>
              </p>

              <h3>4. Acceptance of This Policy</h3>
              <p>
                By completing a purchase on A&N Creative, you acknowledge that you have read, understood, and agreed to this Refund Policy. This policy is part of our Terms of Service.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
