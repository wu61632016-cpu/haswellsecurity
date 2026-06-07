"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNavigation, productMegaMenu } from "@/data/navigation";

export default function MobileDrawerMenu() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(true);
  const [activeGroup, setActiveGroup] = useState<string>("Video Surveillance");

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] bg-dark/60 backdrop-blur-sm">
          <div className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
              <Link href="/" onClick={closeMenu} className="font-bold tracking-tight text-dark">
                HASWELL SECURITY
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              <div className="space-y-2">
                {mainNavigation.map((item) => {
                  if (item.hasMegaMenu) {
                    return (
                      <div key={item.href} className="rounded-2xl border border-slate-100">
                        <button
                          type="button"
                          onClick={() => setProductsOpen((value) => !value)}
                          className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold text-dark"
                        >
                          {item.title}
                          <ChevronDown
                            className={`h-4 w-4 transition ${productsOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {productsOpen && (
                          <div className="border-t border-slate-100 bg-slate-50 p-4">
                            <div className="flex gap-2 overflow-x-auto pb-3">
                              {productMegaMenu.map((group) => (
                                <button
                                  key={group.title}
                                  type="button"
                                  onClick={() => setActiveGroup(group.title)}
                                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                                    activeGroup === group.title
                                      ? "bg-primary text-white"
                                      : "bg-white text-slate-600"
                                  }`}
                                >
                                  {group.title}
                                </button>
                              ))}
                            </div>

                            {productMegaMenu
                              .filter((group) => group.title === activeGroup)
                              .map((group) => (
                                <div key={group.title} className="mt-4 rounded-2xl bg-white p-4">
                                  <Link
                                    href={group.href}
                                    onClick={closeMenu}
                                    className="block text-base font-bold text-dark"
                                  >
                                    {group.title}
                                  </Link>

                                  <div className="mt-3 grid gap-1">
                                    {group.links.map((link) => (
                                      <Link
                                        key={link.title}
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-primary"
                                      >
                                        {link.title}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-2xl px-4 py-4 font-semibold text-dark hover:bg-slate-50"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 rounded-3xl bg-primary-soft p-5">
                <p className="text-sm font-semibold text-primary">Need product catalog?</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Contact Haswell by RFQ form or WhatsApp. We usually reply within 24 hours.
                </p>

                <div className="mt-4 grid gap-3">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="rounded-xl bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
                  >
                    Get Quote
                  </Link>
                  <a
                    href="https://wa.me/8613800000000?text=Hello%20Haswell%20Security%2C%20please%20send%20catalog%20and%20quotation."
                    target="_blank"
                    className="rounded-xl bg-success px-5 py-3 text-center text-sm font-semibold text-white"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 px-6 py-4">
              <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold">
                {["EN", "ES", "FR", "AR"].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    className="rounded-xl border border-slate-200 px-3 py-2 text-slate-600 hover:border-primary hover:text-primary"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
