import { describe, expect, it, vi } from "vitest";

import { HeaderWrapper } from "./header-wrapper";
import { Media } from "./media";
import { Paragraph } from "./paragraph";
import { Table, TableCell, TableRow } from "./table";

describe("HeaderWrapper", () => {
    describe("#add", () => {
        it("should call the underlying header's addChildElement for Paragraph", () => {
            const wrapper = new HeaderWrapper(new Media(), 1);
            const spy = vi.spyOn(wrapper.View, "add");
            wrapper.add(new Paragraph({}));

            expect(spy).toBeCalled();
        });

        it("should call the underlying header's addChildElement for Table", () => {
            const wrapper = new HeaderWrapper(new Media(), 1);
            const spy = vi.spyOn(wrapper.View, "add");
            wrapper.add(
                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [new Paragraph("hello")],
                                }),
                            ],
                        }),
                    ],
                }),
            );

            expect(spy).toBeCalled();
        });
    });

    describe("#addChildElement", () => {
        it("should call the underlying header's addChildElement", () => {
            const file = new HeaderWrapper(new Media(), 1);
            const spy = vi.spyOn(file.View, "addChildElement");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            file.addChildElement({} as any);

            expect(spy).toBeCalled();
        });
    });

    describe("#Media", () => {
        it("should get Media", () => {
            const media = new Media();
            const file = new HeaderWrapper(media, 1);
            expect(file.Media).to.equal(media);
        });
    });
});
