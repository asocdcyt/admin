import { Router } from 'express';
import * as dashCtrl from '../controllers/dash.controller';
import { isAuthenticated } from "../helpers/auth";

const router = Router();

router.get('/data', isAuthenticated, dashCtrl.data);

router.get('/jornadas', isAuthenticated, dashCtrl.jornadasPage);

router.get('/curses', isAuthenticated, dashCtrl.curses);

router.get('/curses/pendient-curses', isAuthenticated, dashCtrl.pendientCurse);

router.get('/data/curses/desing-graphic', isAuthenticated, dashCtrl.curseDesingGraphic);

router.get('/data/curses/branding', isAuthenticated, dashCtrl.curseBranding);

router.get('/data/curses/photoshop', isAuthenticated, dashCtrl.cursePhotoshop);

router.get('/curses/confirm-curses', isAuthenticated, dashCtrl.confirmCurse);

router.get('/curses/rejected-curses', isAuthenticated, dashCtrl.rejectedCurse);

router.get('/data/pendient', isAuthenticated, dashCtrl.pendient);

router.get('/data/confirm', isAuthenticated, dashCtrl.confirm);

router.get('/data/rejected', isAuthenticated, dashCtrl.rejected);

router.get('/papers', isAuthenticated, dashCtrl.papers);

router.get('/papers/list-1', isAuthenticated, dashCtrl.list1);

router.get('/papers/list-2', isAuthenticated, dashCtrl.list2);

router.get('/papers/list-3', isAuthenticated, dashCtrl.list3);

router.get('/papers/list-4', isAuthenticated, dashCtrl.list4);

router.get('/papers/list-5', isAuthenticated, dashCtrl.list5);

router.get('/papers/list-6', isAuthenticated, dashCtrl.list6);

router.get('/papers/list-7', isAuthenticated, dashCtrl.list7);

router.get('/data/view/:id', isAuthenticated, dashCtrl.view);

router.get('/data/view-curse/:id', isAuthenticated, dashCtrl.viewCurse);

router.get('/data/edit/:id', isAuthenticated, dashCtrl.edit);

router.get('/data/edit-curse/:id', isAuthenticated, dashCtrl.editCurse);

router.put('/data/edit/:id', isAuthenticated, dashCtrl.editUpdate);

router.put('/data/edit-curse/:id', isAuthenticated, dashCtrl.editUpdateCurse);

router.get("/data/delete/:id", isAuthenticated, dashCtrl.deleteNoteGET);

router.get("/data/delete-curse/:id", isAuthenticated, dashCtrl.deleteNoteGETCurse);

router.delete("/data/delete/:id", isAuthenticated, dashCtrl.deleteNote);

router.delete("/data/delete-curse/:id", isAuthenticated, dashCtrl.deleteNoteCurse);

export default router;